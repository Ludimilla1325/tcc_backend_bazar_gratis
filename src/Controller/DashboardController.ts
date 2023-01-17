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
import {
  pointsSolicitationLastThirtyDays,
  pointsSolicitationLastThirtyDaysApproved,
  pointsSolicitationLastThirtyDaysDenied,
  purchaseDeliveredNinetyDays,
  purchaseDeliveredSevenDays,
  purchaseDeliveredThirtyDays,
  totalNumOfClients,
} from "../Modules/dashboard/useCases/master";
import { topSellingProducts } from "../Modules/dashboard/useCases/topSellingProducts";

export class DashboardController {
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
}
