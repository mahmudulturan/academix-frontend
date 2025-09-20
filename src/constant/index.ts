// Sample data type
export type User = {
  id: string
  name: string
  email: string
  status: "active" | "inactive" | "pending"
  role: "admin" | "user" | "moderator"
  department: string
  joinDate: string
  lastActive: string
}

// Sample data
export const tableData: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@company.com",
    status: "active",
    role: "admin",
    department: "Engineering",
    joinDate: "2023-01-15",
    lastActive: "2024-01-20",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@company.com",
    status: "active",
    role: "user",
    department: "Marketing",
    joinDate: "2023-03-22",
    lastActive: "2024-01-19",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob.johnson@company.com",
    status: "inactive",
    role: "moderator",
    department: "Support",
    joinDate: "2022-11-08",
    lastActive: "2024-01-10",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice.brown@company.com",
    status: "pending",
    role: "user",
    department: "Sales",
    joinDate: "2024-01-01",
    lastActive: "2024-01-18",
  },
  {
    id: "5",
    name: "Charlie Wilson",
    email: "charlie.wilson@company.com",
    status: "active",
    role: "admin",
    department: "Engineering",
    joinDate: "2022-08-12",
    lastActive: "2024-01-20",
  },
  {
    id: "6",
    name: "Diana Davis",
    email: "diana.davis@company.com",
    status: "active",
    role: "user",
    department: "Design",
    joinDate: "2023-06-30",
    lastActive: "2024-01-17",
  },
]