import { JobSearchHelper, JobSearchRequest } from './index';

async function testJobSearch() {
  const request: JobSearchRequest = {
    title: 'developer',
    size: 2
  };

  try {
    const result = await JobSearchHelper.searchJobsAsync(request);
    console.log('Job search results:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error during job search:', error);
  }
}

testJobSearch();