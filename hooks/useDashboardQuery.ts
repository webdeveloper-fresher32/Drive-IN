import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { QueryParams } from '@/types/dashboard';

export const useDashboardQuery = () => {
  const router = useRouter();
  
  const query: QueryParams = {
    page: Array.isArray(router.query.page) ? router.query.page[0] : router.query.page,
    limit: Array.isArray(router.query.limit) ? router.query.limit[0] : router.query.limit,
    status: Array.isArray(router.query.status) ? router.query.status[0] : router.query.status,
    auditAction: Array.isArray(router.query.auditAction) ? router.query.auditAction[0] : router.query.auditAction,
    auditPage: Array.isArray(router.query.auditPage) ? router.query.auditPage[0] : router.query.auditPage,
    auditLimit: Array.isArray(router.query.auditLimit) ? router.query.auditLimit[0] : router.query.auditLimit,
  };
  
  const updateQuery = useCallback((newParams: Partial<QueryParams>) => {
    const currentQuery = { ...router.query };
    
    Object.entries(newParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        currentQuery[key] = String(value);
      } else {
        delete currentQuery[key];
      }
    });
    
    router.push({
      pathname: router.pathname,
      query: currentQuery,
    }, undefined, { shallow: true, scroll: false });
  }, [router]);

  const resetPage = useCallback((params: Partial<QueryParams>) => {
    updateQuery({ ...params, page: '1' });
  }, [updateQuery]);

  return {
    query,
    updateQuery,
    resetPage,
  };
};
