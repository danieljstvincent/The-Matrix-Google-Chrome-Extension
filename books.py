from fastapi import FastAPI

app = FastAPI()

BOOKS = [
    {"book": "Genesis", "author": "Moses", "theme": "Creation and the early history of mankind"},
    {"book": "Exodus", "author": "Moses", "theme": "Israel's deliverance from Egypt and the giving of the Law"},
    {"book": "Leviticus", "author": "Moses", "theme": "Laws and regulations for worship and conduct"},
    {"book": "Numbers", "author": "Moses", "theme": "The wilderness wanderings of Israel"},
    {"book": "Deuteronomy", "author": "Moses", "theme": "Moses' final speeches and the renewal of the covenant"},
    {"book": "Joshua", "author": "Joshua", "theme": "The conquest and division of the Promised Land"},
    {"book": "Judges", "author": "Samuel", "theme": "Israel's cycles of sin, judgment, and deliverance"},
    {"book": "Ruth", "author": "Samuel", "theme": "God's providence and the story of Ruth and Boaz"},
    {"book": "1 Samuel", "author": "Samuel", "theme": "The establishment of the monarchy in Israel"},
    {"book": "2 Samuel", "author": "Nathan and Gad", "theme": "The reign of King David"},
    {"book": "1 Kings", "author": "Jeremiah", "theme": "The history of Israel's monarchy"},
    {"book": "2 Kings", "author": "Jeremiah", "theme": "The continued history of Israel and Judah"},
    {"book": "1 Chronicles", "author": "Ezra", "theme": "A retelling of the history of Israel from Adam to David"},
    {"book": "2 Chronicles", "author": "Ezra", "theme": "A retelling of the history of Judah from Solomon to the exile"},
    {"book": "Ezra", "author": "Ezra", "theme": "The return from exile and the rebuilding of the temple"},
    {"book": "Nehemiah", "author": "Nehemiah", "theme": "The rebuilding of Jerusalem's walls and the reform of the people"},
    {"book": "Esther", "author": "Mordecai", "theme": "God's protection of the Jews in Persia"},
    {"book": "Job", "author": "Unknown", "theme": "The problem of suffering and God's sovereignty"},
    {"book": "Psalms", "author": "David and others", "theme": "Songs and prayers of praise, lament, and thanksgiving"},
    {"book": "Proverbs", "author": "Solomon and others", "theme": "Wisdom for living a godly life"},
    {"book": "Ecclesiastes", "author": "Solomon", "theme": "The meaning of life and the vanity of earthly pursuits"},
    {"book": "Song of Solomon", "author": "Solomon", "theme": "The beauty of love and marriage"},
    {"book": "Isaiah", "author": "Isaiah", "theme": "Prophecies of judgment and restoration"},
    {"book": "Jeremiah", "author": "Jeremiah", "theme": "Warnings of judgment and messages of hope"},
    {"book": "Lamentations", "author": "Jeremiah", "theme": "Laments over the destruction of Jerusalem"},
    {"book": "Ezekiel", "author": "Ezekiel", "theme": "Visions and prophecies of judgment and restoration"},
    {"book": "Daniel", "author": "Daniel", "theme": "God's sovereignty over history and empires"},
    {"book": "Hosea", "author": "Hosea", "theme": "God's faithful love for unfaithful Israel"},
    {"book": "Joel", "author": "Joel", "theme": "The day of the Lord and the coming of the Spirit"},
    {"book": "Amos", "author": "Amos", "theme": "God's justice and judgment on Israel and the nations"},
    {"book": "Obadiah", "author": "Obadiah", "theme": "Judgment on Edom"},
    {"book": "Jonah", "author": "Jonah", "theme": "God's mercy on the repentant Ninevites"},
    {"book": "Micah", "author": "Micah", "theme": "Judgment and restoration for Israel and Judah"},
    {"book": "Nahum", "author": "Nahum", "theme": "The fall of Nineveh"},
    {"book": "Habakkuk", "author": "Habakkuk", "theme": "Faith in God's justice despite evil and suffering"},
    {"book": "Zephaniah", "author": "Zephaniah", "theme": "The day of the Lord and judgment on Judah"},
    {"book": "Haggai", "author": "Haggai", "theme": "Rebuilding the temple and encouragement for the people"},
    {"book": "Zechariah", "author": "Zechariah", "theme": "Visions of encouragement and future hope"},
    {"book": "Malachi", "author": "Malachi", "theme": "Call to faithfulness and prophecy of the coming Messiah"},
    {"book": "Matthew", "author": "Matthew", "theme": "Jesus as the promised Messiah and King"},
    {"book": "Mark", "author": "Mark", "theme": "Jesus as the suffering servant and Son of God"},
    {"book": "Luke", "author": "Luke", "theme": "Jesus as the Savior of all people"},
    {"book": "John", "author": "John", "theme": "Jesus as the eternal Son of God"},
    {"book": "Acts", "author": "Luke", "theme": "The birth and growth of the early church"},
    {"book": "Romans", "author": "Paul", "theme": "The righteousness of God revealed in the gospel"},
    {"book": "1 Corinthians", "author": "Paul", "theme": "Addressing problems and issues in the church"},
    {"book": "2 Corinthians", "author": "Paul", "theme": "Paul's defense of his apostleship and ministry"},
    {"book": "Galatians", "author": "Paul", "theme": "Justification by faith alone"},
    {"book": "Ephesians", "author": "Paul", "theme": "The unity of the church and the blessings in Christ"},
    {"book": "Philippians", "author": "Paul", "theme": "Joy and unity in Christ"},
    {"book": "Colossians", "author": "Paul", "theme": "The supremacy of Christ"},
    {"book": "1 Thessalonians", "author": "Paul", "theme": "Encouragement and instruction for a persecuted church"},
    {"book": "2 Thessalonians", "author": "Paul", "theme": "Clarification about the Lord's return"},
    {"book": "1 Timothy", "author": "Paul", "theme": "Instructions for church leadership and conduct"},
    {"book": "2 Timothy", "author": "Paul", "theme": "Paul's final charge to Timothy"},
    {"book": "Titus", "author": "Paul", "theme": "Instructions for church leadership and good works"},
    {"book": "Philemon", "author": "Paul", "theme": "Appeal for a runaway slave"},
    {"book": "Hebrews", "author": "Unknown", "theme": "The superiority of Christ and the new covenant"},
    {"book": "James", "author": "James", "theme": "Practical faith and wisdom"},
    {"book": "1 Peter", "author": "Peter", "theme": "Encouragement for suffering Christians"},
    {"book": "2 Peter", "author": "Peter", "theme": "Warnings against false teachers"},
    {"book": "1 John", "author": "John", "theme": "Assurance of salvation and love for one another"},
    {"book": "2 John", "author": "John", "theme": "Warning against false teachers"},
    {"book": "3 John", "author": "John", "theme": "Hospitality and support for Christian workers"},
    {"book": "Jude", "author": "Jude", "theme": "Contending for the faith against false teachers"},
    {"book": "Revelation", "author": "John", "theme": "The ultimate victory of Christ and the end of the age"}
]




@app.get("/api-endpoint")
async def first_api():
    return BOOKS


@app.get("/books/{book_author}")
async def read_book(book_author: str):
    result = []
    for book in BOOKS:
        if book.get('author').casefold() == book_author.casefold():
            result.append(book)
    return result

@app.get()
async def read_category_by_query(category: str):
    books_to_return = []
    for i in BOOKS:
        if i.get('author').casefold() == category.casefold():
            books_to_return.append(i)
    return i
