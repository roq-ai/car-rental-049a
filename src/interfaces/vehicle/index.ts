import { PerformanceAssessmentInterface } from 'interfaces/performance-assessment';
import { VehicleUsageInterface } from 'interfaces/vehicle-usage';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  vehicle_info: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  performance_assessment?: PerformanceAssessmentInterface[];
  vehicle_usage?: VehicleUsageInterface[];
  user?: UserInterface;
  _count?: {
    performance_assessment?: number;
    vehicle_usage?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_info?: string;
  user_id?: string;
}
