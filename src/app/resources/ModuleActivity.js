//Module activity based access control
export const MODULE_ACTIVITY = {
    USER: {
        READ: 11,
        CREATE: 12,
        MODIFY: 15,
        DELETE: 14,
    },
    Post: {
        READ: 21,
        CREATE: 22,
        Manage: 23,
        DELETE: 24,
        MODIFY: 15,
    },
    Report: {
        READ: 31,
        CREATE: 32,
        Manage: 33,
        MODIFY: 15,
        DELETE: 34,
    },
}