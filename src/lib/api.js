const FIREBASE_DOMAIN =
  "https://uploadimage-3aa3a-default-rtdb.firebaseio.com/";

export async function addUser(userData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/users/${userData.username}.json`,
    {
      method: "PUT",
      body: JSON.stringify(userData),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create user.");
  }

  return null;
}
export async function addBook(bookData) {
  console.log(bookData.bookId)
  const response = await fetch(
    `${FIREBASE_DOMAIN}/Book/${bookData.bookId}.json`,
    {
      method: "PUT",
      body: JSON.stringify(bookData),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create book.");
  }

  return null;
}


export async function getProfile(username) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users/${username}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch username");
  }

  const loadedQuote = {
    id: username,
    ...data,
  };

  return loadedQuote;
}
