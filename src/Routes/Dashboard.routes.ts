import { Router } from "express";
import { DashboardController } from "../Controller/DashboardController";

const router = Router();
router.get(
  `/points-solicitation/perStore`,
  DashboardController.pointsSolicitationLastNinetyDaysPerStore
);
router.get(
  `/purchase-delivered/perStore`,
  DashboardController.PurchaseLastNinetyDaysPerStore
);
//

router.get(
  `/points-solicitation/percentage/:storeId`,
  DashboardController.pointsSolicitationByStorePercentage
);
router.get(
  `/purchase-delivered/percentage/:storeId`,
  DashboardController.purchaseDeliveredByStore
);

router.get(
  `/monthly-purchase/percentage/:storeId`,
  DashboardController.monthlyPurchaseByStore
);

router.get(
  `/total-number-client/:storeId`,
  DashboardController.totalNumOfClientsByStore
);

// Master

router.get(
  `/points-solicitation/percentage`,
  DashboardController.pointsSolicitationPercentage
);
router.get(
  `/purchase-delivered/percentage`,
  DashboardController.purchaseDelivered
);

router.get(`/monthly-purchase/percentage`, DashboardController.monthlyPurchase);

router.get(`/monthly-purchase/percentage`, DashboardController.monthlyPurchase);

router.get(`/total-number-client/`, DashboardController.totalNumOfClients);

router.get(`/top-selling-products/`, DashboardController.topSellingProducts);

export default router;
