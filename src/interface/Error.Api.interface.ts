export interface IPostError extends Error {
    statusCode?: number; 
    details?: string;     
    timestamp?: string;    
  }