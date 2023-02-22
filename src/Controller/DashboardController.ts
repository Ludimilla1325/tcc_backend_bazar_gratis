import { Request, Response } from "express";
import {
  pointsSolicitationLastThirtyDaysApprovedByStore,
  pointsSolicitationLastThirtyDaysByStore,
  pointsSolicitationLastThirtyDaysDeniedByStore,
  purchaseDeliveredNinetyDaysByStore,
  purchaseDeliveredSevenDaysByStore,
  purchaseDeliveredThirtyDaysByStore,
  totalNumOfClientsByStore,
} from "../Modules/dashboard/useCases/admin";
import { monthlyPurchaseByStore } from "../Modules/dashboard/useCases/admin/monthlyPurchase";
import { pointsSolicitationByStorePercentage } from "../Modules/dashboard/useCases/admin/pointsSolicitation";
import { purchaseDeliveredByStore } from "../Modules/dashboard/useCases/admin/purchaseDeliveredByStore";
import { topSellingProductsByStore } from "../Modules/dashboard/useCases/admin/topSellingProductsByStore";
import {
  pointsSolicitationLastThirtyDays,
  pointsSolicitationLastThirtyDaysApproved,
  pointsSolicitationLastThirtyDaysDenied,
  purchaseDeliveredNinetyDays,
  purchaseDeliveredSevenDays,
  purchaseDeliveredThirtyDays,
  totalNumOfClients,
  pointsSolicitationLastNinetyDaysPerStore,
} from "../Modules/dashboard/useCases/master";
import { monthlyPurchase } from "../Modules/dashboard/useCases/master/monthlyPurchase";
import { pointsSolicitationPercentage } from "../Modules/dashboard/useCases/master/pointsSolicitation";
import { purchaseDelivered } from "../Modules/dashboard/useCases/master/purchaseDeliveredByStore";
import { PurchaseLastNinetyDaysPerStore } from "../Modules/dashboard/useCases/master/PurchaseLastNinetyDaysPerStore copy";
import { topSellingProducts } from "../Modules/dashboard/useCases/topSellingProducts";

export class DashboardController {
  static async pointsSolicitationLastNinetyDaysPerStore(
    req: Request,
    res: Response
  ) {
    try {
      const result = await pointsSolicitationLastNinetyDaysPerStore();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async PurchaseLastNinetyDaysPerStore(req: Request, res: Response) {
    try {
      const result = await PurchaseLastNinetyDaysPerStore();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async pointsSolicitationByStorePercentage(
    req: Request,
    res: Response
  ) {
    const storeId = Number(req.params.storeId);
    try {
      const result = await pointsSolicitationByStorePercentage(storeId);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async purchaseDeliveredByStore(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    try {
      const result = await purchaseDeliveredByStore(+storeId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async monthlyPurchaseByStore(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    try {
      const result = await monthlyPurchaseByStore(+storeId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async pointsSolicitationPercentage(req: Request, res: Response) {
    try {
      const result = await pointsSolicitationPercentage();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async purchaseDelivered(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    try {
      const result = await purchaseDelivered();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async monthlyPurchase(req: Request, res: Response) {
    try {
      const result = await monthlyPurchase();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async pointsSolicitationLastThirtyDaysApprovedByStore(
    req: Request,
    res: Response
  ) {
    const storeId = Number(req.params.storeId);
    try {
      const result = await pointsSolicitationLastThirtyDaysApprovedByStore(
        storeId
      );

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async pointsSolicitationLastThirtyDaysByStore(
    req: Request,
    res: Response
  ) {
    const storeId = Number(req.params.storeId);
    try {
      const result = await pointsSolicitationLastThirtyDaysByStore(storeId);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async pointsSolicitationLastThirtyDaysDeniedByStore(
    req: Request,
    res: Response
  ) {
    const storeId = Number(req.params.storeId);
    try {
      const result = await pointsSolicitationLastThirtyDaysDeniedByStore(
        storeId
      );

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async purchaseDeliveredNinetyDaysByStore(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    try {
      const result = await purchaseDeliveredNinetyDaysByStore(+storeId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async purchaseDeliveredSevenDaysByStore(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    try {
      const result = await purchaseDeliveredSevenDaysByStore(storeId);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async purchaseDeliveredThirtyDaysByStore(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    try {
      const result = await purchaseDeliveredThirtyDaysByStore(storeId);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async totalNumOfClientsByStore(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    try {
      const result = await totalNumOfClientsByStore(storeId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async pointsSolicitationLastThirtyDays(req: Request, res: Response) {
    try {
      const result = await pointsSolicitationLastThirtyDays();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async pointsSolicitationLastThirtyDaysApproved(
    req: Request,
    res: Response
  ) {
    try {
      const result = await pointsSolicitationLastThirtyDaysApproved();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async pointsSolicitationLastThirtyDaysDenied(
    req: Request,
    res: Response
  ) {
    try {
      const result = await pointsSolicitationLastThirtyDaysDenied();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async purchaseDeliveredNinetyDays(req: Request, res: Response) {
    try {
      const result = await purchaseDeliveredNinetyDays();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async purchaseDeliveredSevenDays(req: Request, res: Response) {
    try {
      const result = await purchaseDeliveredSevenDays();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async purchaseDeliveredThirtyDays(req: Request, res: Response) {
    try {
      const result = await purchaseDeliveredThirtyDays();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async totalNumOfClients(req: Request, res: Response) {
    try {
      const result = await totalNumOfClients();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async topSellingProducts(req: Request, res: Response) {
    try {
      const result = await topSellingProducts();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async topSellingProductsByStore(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    try {
      const result = await topSellingProductsByStore(storeId);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
