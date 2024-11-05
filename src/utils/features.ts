import { MessageResponse } from "../types/api-types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { SerializedError } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import toast from "react-hot-toast";
import moment from "moment";

// Improved type definitions
type ResType = {
  data?: MessageResponse;
  error?: FetchBaseQueryError | SerializedError;
};

export const responseToast = (
  res: ResType,
  navigate: NavigateFunction | null,
  url: string
): void => {
  try {
    if (res.data) {
      toast.success(res.data.message);
      if (navigate) navigate(url);
    } else if (res.error) {
      const error = res.error as FetchBaseQueryError;
      const messageResponse = error.data as MessageResponse;
      toast.error(messageResponse.message || "An error occurred");
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.error("Toast Error:", error);
  }
};

export const getLastMonths = () => {
  try {
    const currentDate = moment();
    currentDate.date(1); // Set to first day of month

    const last6Months: string[] = [];
    const last12Months: string[] = [];

    // Get last 12 months (includes last 6 months)
    for (let i = 0; i < 12; i++) {
      const monthDate = currentDate.clone().subtract(i, "months");
      const monthName = monthDate.format("MMMM");
      
      if (i < 6) {
        last6Months.unshift(monthName);
      }
      last12Months.unshift(monthName);
    }

    return {
      last12Months,
      last6Months,
    };
  } catch (error) {
    console.error("Error getting months:", error);
    return {
      last12Months: [],
      last6Months: [],
    };
  }
};

export const transformImage = (
  url: string | undefined | null,
  width: number = 200
): string => {
  try {
    // Handle invalid inputs
    if (!url) return "/default-image.png"; // Replace with your default image path
    if (typeof url !== "string") return "/default-image.png";
    
    // If URL doesn't contain upload/, return original URL
    if (!url.includes("upload/")) return url;
    
    // Transform the image URL
    const newUrl = url.replace(
      /upload\//g,
      `upload/dpr_auto/w_${Math.floor(width)}/`
    );
    
    return newUrl;
  } catch (error) {
    console.error("Error transforming image:", error);
    return "/default-image.png"; // Replace with your default image path
  }
};