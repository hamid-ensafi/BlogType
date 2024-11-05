import { ILogin } from "@/interface/Login.User.Interface";


export async function login(userInfo:ILogin) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw  (errorData);
    }

    const data = await response.json(); 
    
    return data; 
  } catch (error) {
    
    throw  (error || "خطای غیر منتظره ای رخ داد دوباره تلاش کنید");
  }
}
