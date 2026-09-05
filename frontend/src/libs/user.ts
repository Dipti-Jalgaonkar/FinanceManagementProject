import apiClient from "./apiClient";

export const createKyc = (payload: any) => {
    return apiClient.post("user/kyc", payload);
};

export const kycProfile = () => {
    return apiClient.get("user/kyc-profile/");
};

export const uploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);

    const { data } = await apiClient.post("core/upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
};
