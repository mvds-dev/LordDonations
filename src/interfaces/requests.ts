
export interface IRequestsCreate {
    typeId: string,
    institutionId: string,
    quantity: number,
    description: string
}

export interface IRequestUpdate {
    requestId: string,
    institutionId: string,
    quantity: number,
    description: string
}