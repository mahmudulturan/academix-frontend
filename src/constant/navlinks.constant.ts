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
} from '@hugeicons/core-free-icons';
import { IconSvgElement } from '@hugeicons/react';

export interface NavRoute {
  nameKey: string;
  path: string;
  icon: IconSvgElement;
  children?: NavRoute[];
}

export const getDashboardRoutes = (): NavRoute[] => [
  {
    nameKey: "dashboard",
    path: "/dashboard",
    icon: Home01Icon,
  },
  {
    nameKey: "users",
    path: "/dashboard/user",
    icon: UserMultipleIcon
  },
  {
    nameKey: "student",
    path: "/dashboard/student",
    icon: StudentIcon,
    children: [
      {
        nameKey: "viewStudents",
        path: "/dashboard/student",
        icon: ViewIcon,
      },
      {
        nameKey: "addNewStudent",
        path: "/dashboard/student/create",
        icon: PlusSignIcon,
      }
    ]
  },
  {
    nameKey: "teacher",
    path: "/dashboard/teacher",
    icon: MentorIcon,
    children: [
      {
        nameKey: "viewTeachers",
        path: "/dashboard/teacher",
        icon: ViewIcon,
      },
      {
        nameKey: "addNewTeacher",
        path: "/dashboard/teacher/create",
        icon: PlusSignIcon,
      }
    ]
  },
  {
    nameKey: "classes",
    path: "/dashboard/class",
    icon: MeetingRoomIcon
  },
  {
    nameKey: "subjects",
    path: "/dashboard/subject",
    icon: BookOpen01Icon
  },
  {
    nameKey: "attendance",
    path: "/dashboard/attendance",
    icon: CheckListIcon,
    children: [
      {
        nameKey: "viewAttendances",
        path: "/dashboard/attendance",
        icon: ViewIcon,
      },
      {
        nameKey: "takeAttendance",
        path: "/dashboard/attendance/take",
        icon: TaskDone01Icon,
      }
    ]
  },
  {
    nameKey: "routine",
    path: "/dashboard/routine",
    icon: Calendar01Icon,
    children: [
      {
        nameKey: "viewRoutines",
        path: "/dashboard/routine",
        icon: ViewIcon,
      },
      {
        nameKey: "createRoutine",
        path: "/dashboard/routine/create",
        icon: Edit02Icon,
      }
    ]
  },
  {
    nameKey: "notices",
    path: "/dashboard/notices",
    icon: Notification01Icon
  },
  {
    nameKey: "exam",
    path: "/dashboard/exam",
    icon: Mortarboard02Icon,
    children: [
      {
        nameKey: "viewExams",
        path: "/dashboard/exam",
        icon: ViewIcon,
      },
      {
        nameKey: "createExam",
        path: "/dashboard/exam/create",
        icon: PlusSignIcon,
      }
    ]
  },
  {
    nameKey: "result",
    path: "/dashboard/result",
    icon: ChartColumnIcon,
    children: [
      {
        nameKey: "viewResults",
        path: "/dashboard/result",
        icon: FileViewIcon,
      },
      {
        nameKey: "createResult",
        path: "/dashboard/result/create",
        icon: Edit02Icon,
      }
    ]
  },
  {
    nameKey: "documents",
    path: "/dashboard/document",
    icon: DocumentValidationIcon
  },
  {
    nameKey: "accounts",
    path: "/dashboard/accounts",
    icon: CreditCardIcon,
    children: [
      {
        nameKey: "viewAccounts",
        path: "/dashboard/accounts",
        icon: ViewIcon,
      },
      {
        nameKey: "payments",
        path: "/dashboard/accounts/payment",
        icon: MoneyBag01Icon,
      },
      {
        nameKey: "payouts",
        path: "/dashboard/accounts/payout",
        icon: MoneyReceive01Icon,
      }
    ]
  },
  {
    nameKey: "settings",
    path: "/dashboard/account",
    icon: Settings01Icon,
    children: [
      {
        nameKey: "account",
        path: "/dashboard/account",
        icon: UserAccountIcon,
      },
      {
        nameKey: "rbac",
        path: "/dashboard/rbac",
        icon: ShieldKeyIcon,
      }
    ]
  }
];