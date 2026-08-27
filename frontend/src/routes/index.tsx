// src/routes/index.tsx
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Index from "@/pages/base/Index";
import NotFoundPage from "@/pages/error/NotFoundPage";

// new imports
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Overview from "@/pages/dashboard/Overview";
import ProtectedRoute from "@/routes/ProtectedRoute";
import Transfer from "@/pages/dashboard/transfer/TransferNew";
import KYC from "@/pages/dashboard/kyc/KYC";
import SavingsGoalNew from "@/pages/dashboard/savings/SavingsGoalNew";
import FundWallet from "@/pages/dashboard/wallet/FundWallet";
import Transfers from "@/pages/dashboard/transfer/Transfers";
import SavingsGoalsList from "@/pages/dashboard/savings/SavingGoalList";
import SavingsGoalDetail from "@/pages/dashboard/savings/SavingsGoalDetail";
import Beneficiaries from "@/pages/dashboard/beneficiaries/Beneficiaries";
import Notifications from "@/pages/dashboard/notification/Notifications";
import TransactionDetail from "@/pages/dashboard/transactions/TransactionsDetail";
import TransactionsList from "@/pages/dashboard/transactions/TransactionsList";

export const routes: RouteObject[] = [
    {
        path: "/",
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <Index />,
            },
        ],
    },

    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },

    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/dashboard",
                element: <Overview />,
            },
            {
                path: "/dashboard/transfers/new",
                element: <Transfer />,
            },
            {
                path: "/dashboard/kyc",
                element: <KYC />,
            },
            { path: "/dashboard/fund", element: <FundWallet /> },

            { path: "/dashboard/transactions", element: <TransactionsList /> },
            {
                path: "/dashboard/transactions/:reference",
                element: <TransactionDetail />,
            },

            { path: "/dashboard/transfers", element: <Transfers /> },
            { path: "/dashboard/beneficiaries", element: <Beneficiaries /> },
            { path: "/dashboard/notifications", element: <Notifications /> },

            { path: "/dashboard/savings/new", element: <SavingsGoalNew /> },
            { path: "/dashboard/savings/", element: <SavingsGoalsList /> },
            {
                path: "/dashboard/savings/:uuid",
                element: <SavingsGoalDetail />,
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
