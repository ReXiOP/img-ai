export async function generateImage(payload) {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  
    if (!response.ok) throw new Error("Failed to generate image");
    return await response.json();
  }
  