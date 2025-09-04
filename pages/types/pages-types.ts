export type MembershipType = 'vip' | 'standard'
export interface IUserStructure {
    userName: string,
    lastName: string,
    eMail: string,
    phone?: string,
    mobile?: string,
    rewards?: string,
    membership: MembershipType
}
export type FillNewCustomerForm = (user: Omit<IUserStructure, 'membership'>, memberType: MembershipType) => Promise<void>