import {
  Home01Icon,
  UserMultipleIcon,
  StudentIcon,
  MentorIcon,
  MeetingRoomIcon,
  BookOpen01Icon,
  CheckListIcon,
  Calendar01Icon,
  Notification01Icon,
  Mortarboard02Icon,
  ChartColumnIcon,
  CreditCardIcon,
  Settings01Icon,
  DocumentValidationIcon,
  ViewIcon,
  PlusSignIcon,
  TaskDone01Icon,
  Edit02Icon,
  FileViewIcon,
  MoneyBag01Icon,
  MoneyReceive01Icon,
  UserAccountIcon,
  ShieldKeyIcon
} from '@hugeicons/core-free-icons';;

export const dashboardRoutes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: Home01Icon,
  },
  {
    name: "Users",
    path: "/dashboard/user",
    icon: UserMultipleIcon
  },
  {
    name: "Student",
    path: "/dashboard/student",
    icon: StudentIcon,
    children: [
      {
        name: "View Students",
        path: "/dashboard/student",
        icon: ViewIcon,
      },
      {
        name: "Add New Student",
        path: "/dashboard/student/create",
        icon: PlusSignIcon,
      }
    ]
  },
  {
    name: "Teacher",
    path: "/dashboard/teacher",
    icon: MentorIcon,
    children: [
      {
        name: "View Teachers",
        path: "/dashboard/teacher",
        icon: ViewIcon,
      },
      {
        name: "Add New Teacher",
        path: "/dashboard/teacher/create",
        icon: PlusSignIcon,
      }
    ]
  },
  {
    name: "Classes",
    path: "/dashboard/class",
    icon: MeetingRoomIcon
  },
  {
    name: "Subjects",
    path: "/dashboard/subject",
    icon: BookOpen01Icon
  },
  {
    name: "Attendance",
    path: "/dashboard/attendance",
    icon: CheckListIcon,
    children: [
      {
        name: "View Attendances",
        path: "/dashboard/attendance",
        icon: ViewIcon,
      },
      {
        name: "Take Attendance",
        path: "/dashboard/attendance/take",
        icon: TaskDone01Icon,
      }
    ]
  },
  {
    name: "Routine",
    path: "/dashboard/routine",
    icon: Calendar01Icon,
    children: [
      {
        name: "View Routines",
        path: "/dashboard/routine",
        icon: ViewIcon,
      },
      {
        name: "Create Routine",
        path: "/dashboard/routine/create",
        icon: Edit02Icon,
      }
    ]
  },
  {
    name: "Notices",
    path: "/dashboard/notices",
    icon: Notification01Icon
  },
  {
    name: "Exam",
    path: "/dashboard/exam",
    icon: Mortarboard02Icon,
    children: [
      {
        name: "View Exams",
        path: "/dashboard/exam",
        icon: ViewIcon,
      },
      {
        name: "Create Exam",
        path: "/dashboard/exam/create",
        icon: PlusSignIcon,
      }
    ]
  },
  {
    name: "Result",
    path: "/dashboard/result",
    icon: ChartColumnIcon,
    children: [
      {
        name: "View Results",
        path: "/dashboard/result",
        icon: FileViewIcon,
      },
      {
        name: "Create Result",
        path: "/dashboard/result/create",
        icon: Edit02Icon,
      }
    ]
  },
  {
    name: "Documents",
    path: "/dashboard/document",
    icon: DocumentValidationIcon
  },
  {
    name: "Accounts",
    path: "/dashboard/accounts",
    icon: CreditCardIcon,
    children: [
      {
        name: "View Accounts",
        path: "/dashboard/accounts",
        icon: ViewIcon,
      },
      {
        name: "Payments",
        path: "/dashboard/accounts/payment",
        icon: MoneyBag01Icon,
      },
      {
        name: "Payouts",
        path: "/dashboard/accounts/payout",
        icon: MoneyReceive01Icon,
      }
    ]
  },
  {
    name: "Settings",
    path: "/dashboard/account",
    icon: Settings01Icon,
    children: [
      {
        name: "Account",
        path: "/dashboard/account",
        icon: UserAccountIcon,
      },
      {
        name: "RBAC",
        path: "/dashboard/rbac",
        icon: ShieldKeyIcon,
      }
    ]
  }
];