// src/types/issues.ts

export type IssueHealthStatus = 'Healthy' | 'Delayed' | 'Critical' | 'Stalled' | 'Under Audit';

export type EventType = 
  | 'CitizenAction' 
  | 'GovernmentAction' 
  | 'AdministrativeDelay' 
  | 'PublicOversight' 
  | 'Finalization';

export interface TimelineEvent {
  id: string;
  type: EventType;
  titleEn: string;
  titleKn: string; // Kannada translation
  timestamp: string;
  description: string;
  actor?: string; // Who did this (e.g., "Ward Officer", "Citizen")
  metadata?: any; // For flexible data like delay reasons, SLA breached days
}

export interface IssueDelay {
  isDelayed: boolean;
  pendingAtOffice: string; // e.g., "Assistant Engineer Office"
  pendingForDays: number;
  expectedSlaDays: number;
  severity: 'Low' | 'Medium' | 'High';
  reason: string; // e.g., "Contractor delay", "Funding pending"
}

export interface CitizenPressure {
  level: 'Low' | 'Medium' | 'HIGH';
  voteCount: number;
  mlaMentions: number;
  escalationRequests: number;
}

export interface PublicIssue {
  id: string;
  titleEn: string;
  titleKn: string;
  category: string;
  location: string;
  
  healthStatus: IssueHealthStatus;
  pressure: CitizenPressure;
  delayInfo?: IssueDelay;
  
  affectedCitizensCount: number;
  
  timelineEvents: TimelineEvent[];
  
  createdAt: string;
  updatedAt: string;
}
