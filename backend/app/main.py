from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {
        "message": "Illumination AI Backend is Running 🚀"
    }