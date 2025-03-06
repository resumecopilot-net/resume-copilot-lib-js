import axios, { AxiosInstance } from 'axios';

interface JobSearchRequest {
  title: string;
  companyName?: string;
  city?: string;
  state?: string;
  country?: string;
  isRemote?: boolean;
  size: number;
}

interface GeographicLocation {
  lat: number;
  lon: number;
}

interface JobLocation {
  city: string;
  country: string;
  state: string;
  loc: GeographicLocation;
}

interface Job {
  name: string;
  companyName: string;
  location: JobLocation;
  feed: string;
  id: string;
  created: string;
}

interface JobSearchResult {
  jobs: Job[];
}

class JobSearchHelper {
  private static axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://api.resumecopilot.net',
  });

  static async searchJobsAsync(request: JobSearchRequest): Promise<JobSearchResult> {
    try {
      const response = await this.axiosInstance.post<JobSearchResult>('/api/v1/search', request);
      return response.data;
    } catch (error) {
      console.error('Error searching jobs:', error);
      throw new Error('There was an error connecting to the job search service.');
    }
  }
}

export { JobSearchHelper, JobSearchRequest, JobSearchResult };