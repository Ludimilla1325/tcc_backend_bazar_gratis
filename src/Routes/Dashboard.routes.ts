import { Router } from "express";
import { DashboardController } from "../Controller/DashboardController";

const router = Router();
router.get(
  `/points-solicitation/:storeId`,
  DashboardController.pointsSolicitationLastThirtyDaysByStore
);
router.get(
  `/points-solicitation/approved/:storeId`,
  DashboardController.pointsSolicitationLastThirtyDaysApprovedByStore
);
router.get(
  `/points-solicitation/denied/:storeId`,
  DashboardController.pointsSolicitationLastThirtyDaysDeniedByStore
);

router.get(
  `/purchase-delivered/ninety/:storeId`,
  DashboardController.purchaseDeliveredNinetyDaysByStore
);

router.get(
  `/purchase-delivered/seven/:storeId`,
  DashboardController.purchaseDeliveredSevenDaysByStore
);

router.get(
  `/purchase-delivered/thirty/:storeId`,
  DashboardController.purchaseDeliveredThirtyDaysByStore
);

router.get(
  `/total-number-client/:storeId`,
  DashboardController.totalNumOfClientsByStore
);

// Master

router.get(
  `/points-solicitation/`,
  DashboardController.pointsSolicitationLastThirtyDays
);
router.get(
  `/points-solicitation/approved/`,
  DashboardController.pointsSolicitationLastThirtyDaysApproved
);
router.get(
  `/points-solicitation/denied/`,
  DashboardController.pointsSolicitationLastThirtyDaysDenied
);

router.get(
  `/purchase-delivered/ninety/`,
  DashboardController.purchaseDeliveredNinetyDays
);

router.get(
  `/purchase-delivered/seven/`,
  DashboardController.purchaseDeliveredSevenDays
);

router.get(
  `/purchase-delivered/thirty/`,
  DashboardController.purchaseDeliveredThirtyDays
);

router.get(`/total-number-client/`, DashboardController.totalNumOfClients);

router.get(`/top-selling-products/`, DashboardController.topSellingProducts);

export default router;
