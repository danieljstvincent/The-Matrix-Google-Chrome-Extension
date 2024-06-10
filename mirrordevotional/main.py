from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import openai
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize the FastAPI app
app = FastAPI()

# Allow CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Serve static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Define the request body model
class JournalEntry(BaseModel):
    text: str

# Retrieve OpenAI API key from environment variable
openai.api_key = os.getenv("OPENAI_API_KEY")
if openai.api_key is None:
    raise ValueError("OpenAI API key not found. Ensure it is set in the .env file.")

# Endpoint to submit journal entry and get affirmation
@app.post("/journal")
async def create_affirmation(entry: JournalEntry):
    try:
        # Use OpenAI API to generate an affirmation
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": f"Read the following journal entry and generate a bible based devational based on it: {entry.text}"}
            ]
        )
        affirmation = response.choices[0].message['content'].strip()
        return {"affirmation": affirmation}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Root endpoint to serve the index.html file
@app.get("/", response_class=FileResponse)
async def read_index():
    return "static/index.html"
