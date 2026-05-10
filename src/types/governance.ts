// src/types/governance.ts

export type DecisionStage = 
  | 'Proposed' 
  | 'Trending' 
  | 'Under Review' 
  | 'Public Voting' 
  | 'Approved' 
  | 'In Progress' 
  | 'Completed' 
  | 'Auditing' 
  | 'Closed';

export type Category = 
  | 'Infrastructure' 
  | 'Water' 
  | 'Education' 
  | 'Healthcare' 
  | 'Budget' 
  | 'Employment' 
  | 'Welfare' 
  | 'Transport' 
  | 'Environment' 
  | 'Safety' 
  | 'Agriculture' 
  | 'Digital Karnataka';

export type Scope = 'State' | 'District' | 'Constituency' | 'Ward' | 'Gram Panchayat';

export type EscalationLevel = 
  | 'None' 
  | 'District Officer' 
  | 'Minister Dashboard' 
  | 'CM Review' 
  | 'State Assembly';

export interface Escalation {
  level: EscalationLevel;
  thresholdReachedAt: string;
}

export interface GovernmentResponse {
  responderName: string;
  responderTitle: string; // e.g., "BWSSB Commissioner"
  responseBody: string;
  timestamp: string;
  actionTimeline: string; // e.g., "Action planned within 14 days"
}

export interface ParticipationMetrics {
  totalParticipants: number;
  participationRate: number; // Percentage
  verifiedVotes: number;
  unverifiedVotes: number;
  trendVelocity: string; // e.g., "↑ 18% this hour"
}

export interface DecisionImpact {
  estimatedCitizensAffected: string; // e.g., "8.2 lakh"
  costEstimate: string; // e.g., "₹500 Cr"
  whyItMatters: string; 
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
  percentage: number;
}

export interface Decision {
  id: string;
  title: string;
  description: string;
  type: 'Yes/No' | 'Multiple Choice' | 'Petition' | 'Government Initiated';
  stage: DecisionStage;
  category: Category;
  scope: Scope;
  locationName: string; // e.g., "Mysuru", "Whitefield"
  
  metrics: ParticipationMetrics;
  impact: DecisionImpact;
  
  publicSupportIndex: number; // out of 100
  options?: PollOption[]; // Optional depending on type
  
  escalation: Escalation;
  governmentResponse?: GovernmentResponse;
  
  createdAt: string;
  updatedAt: string;
}
