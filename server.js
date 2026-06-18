import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

app.use(express.static("./")) 


app.post("/api/generate-recipe", async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text: prompt }],
                        },
                    ],
                }),
            }
        );

        const data = await response.json();

        res.json(data);

    } catch (error) {
        res.status(500).json({
            error: "Failed to generate recipe",
        });
    }
});

app.listen(3000,()=>{
    console.log(`Server is listening on port http://localhost:3000`)
})

