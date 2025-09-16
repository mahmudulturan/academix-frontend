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
  Folder01Icon,
  CreditCardIcon,
  UserIcon,
  SecurityIcon
} from '@hugeicons/core-free-icons';;

export const routes = [
  {
    name: "Dashboard",
    path: "/dashboard/home",
    icon: Home01Icon,
  },
  {
    name: "Users",
    path: "/dashboard/user",
    icon: UserMultipleIcon,
    children: [
      {
        name: "View Users",
        path: "/dashboard/user/view",
      }
    ]
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
        name: "Student Detail",
        path: "/dashboard/student/detail/[studentID]",
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
        name: "Teacher Details",
        path: "/dashboard/teacher/detail/[teacherId]",
      },
      {
        name: "Add New Teacher",
        path: "/dashboard/teacher/create",
      }
    ]
  },
  {
    name: "Classes",
    path: "/dashboard/class",
    icon: MeetingRoomIcon,
    children: [
      {
        name: "View Classes",
        path: "/dashboard/class/view",
      },
      {
        name: "Class Details",
        path: "/dashboard/class/detail/[classId]",
      }
    ]
  },
  {
    name: "Subjects",
    path: "/dashboard/subject",
    icon: BookOpen01Icon,
    children: [
      {
        name: "View Subjects",
        path: "/dashboard/subject/view",
      }
    ]
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
        name: "Attendance Details",
        path: "/dashboard/attendance/detail/[classId]",
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
        name: "Routine Details",
        path: "/dashboard/routine/detail/[classId]",
      },
      {
        name: "Create Routine",
        path: "/dashboard/routine/create",
      }
    ]
  },
  {
    name: "Notices",
    path: "/dashboard/notices",
    icon: Notification01Icon,
    children: [
      {
        name: "View Notices",
        path: "/dashboard/notices/view",
      }
    ]
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
        name: "Exam Details",
        path: "/dashboard/exam/detail/[examId]",
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
        name: "Result Details",
        path: "/dashboard/result/detail/[resultId]",
      },
      {
        name: "Create Result",
        path: "/dashboard/result/create",
      }
    ]
  },
  {
    name: "Documents",
    path: "/dashboard/document",
    icon: Folder01Icon,
    children: [
      {
        name: "View Documents",
        path: "/dashboard/document/view",
      },
      {
        name: "Document Details",
        path: "/dashboard/document/detail/[documentId]",
      }
    ]
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
    name: "Account",
    path: "/dashboard/account",
    icon: UserIcon,
    children: [
      {
        name: "View Account",
        path: "/dashboard/account/view",
      }
    ]
  },
  {
    name: "RBAC",
    path: "/dashboard/rbac",
    icon: SecurityIcon,
    children: [
      {
        name: "View RBAC",
        path: "/dashboard/rbac/view",
      }
    ]
  }
];