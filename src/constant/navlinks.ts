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
  DocumentValidationIcon
} from '@hugeicons/core-free-icons';;

export const dashboardRoutes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: Home01Icon,
  },
  {
    name: "Users",
    path: "/dashboard/user/view",
    icon: UserMultipleIcon
  },
  {
    name: "Students",
    path: "/dashboard/student",
    icon: StudentIcon,
    children: [
      {
        name: "View Students",
        path: "/dashboard/student/view",
      },
      {
        name: "Add New Student",
        path: "/dashboard/student/create",
      }
    ]
  },
  {
    name: "Teachers",
    path: "/dashboard/teacher",
    icon: MentorIcon,
    children: [
      {
        name: "View Teachers",
        path: "/dashboard/teacher/view",
      },
      {
        name: "Add New Teacher",
        path: "/dashboard/teacher/create",
      }
    ]
  },
  {
    name: "Classes",
    path: "/dashboard/class/view",
    icon: MeetingRoomIcon
  },
  {
    name: "Subjects",
    path: "/dashboard/subject/view",
    icon: BookOpen01Icon
  },
  {
    name: "Attendances",
    path: "/dashboard/attendance",
    icon: CheckListIcon,
    children: [
      {
        name: "View Attendances",
        path: "/dashboard/attendance/view",
      },
      {
        name: "Take Attendance",
        path: "/dashboard/attendance/take",
      }
    ]
  },
  {
    name: "Routines",
    path: "/dashboard/routine",
    icon: Calendar01Icon,
    children: [
      {
        name: "View Routines",
        path: "/dashboard/routine/view",
      },
      {
        name: "Create Routine",
        path: "/dashboard/routine/create",
      }
    ]
  },
  {
    name: "Notices",
    path: "/dashboard/notices/view",
    icon: Notification01Icon
  },
  {
    name: "Exams",
    path: "/dashboard/exam",
    icon: Mortarboard02Icon,
    children: [
      {
        name: "View Exams",
        path: "/dashboard/exam/view",
      },
      {
        name: "Create Exam",
        path: "/dashboard/exam/create",
      }
    ]
  },
  {
    name: "Results",
    path: "/dashboard/result",
    icon: ChartColumnIcon,
    children: [
      {
        name: "View Results",
        path: "/dashboard/result/view",
      },
      {
        name: "Create Result",
        path: "/dashboard/result/create",
      }
    ]
  },
  {
    name: "Documents",
    path: "/dashboard/document/view",
    icon: DocumentValidationIcon
  },
  {
    name: "Accounts",
    path: "/dashboard/accounts",
    icon: CreditCardIcon,
    children: [
      {
        name: "View Accounts",
        path: "/dashboard/accounts/view",
      },
      {
        name: "Payments",
        path: "/dashboard/accounts/payment/view",
      },
      {
        name: "Payouts",
        path: "/dashboard/accounts/payout/view",
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
        path: "/dashboard/account/view",
      },
      {
        name: "View RBAC",
        path: "/dashboard/rbac/view",
      }
    ]
  }
];