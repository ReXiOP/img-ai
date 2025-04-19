export async function generateImage(payload) {
  try {
    const response = await fetch("https://img-ai-back.onrender.com/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Failed to generate image");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error; // You can choose to return or rethrow the error
  }
}
