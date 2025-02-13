const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());
app.use(cors());

const CRM_API_URL = "https://api.hubapi.com/crm/v3/objects/contacts"; // Example: HubSpot API
const CRM_ACCESS_TOKEN = "na2-872f-6d8a-4501-b2c3-48a5eb26a0bf"; // Replace with your API key or OAuth token

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const response = await fetch(CRM_API_URL, {
            method: "GET",
            headers: { Authorization: `Bearer ${CRM_ACCESS_TOKEN}`, "Content-Type": "application/json" },
        });

        const crmData = await response.json();
        const user = crmData.results.find(user => user.properties.email === email);

        if (user) {
            res.json({ success: true, token: "dummy_token_12345" }); // Replace with JWT or CRM token
        } else {
            res.status(401).json({ success: false, message: "User not found in CRM" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "CRM API error" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
