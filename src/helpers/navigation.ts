import * as React from 'react';
import { CommonActions } from '@react-navigation/native';
import type { NavigationContainerRef } from '@react-navigation/native';

// @ts-ignore
export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigateFromRoot(name: string, params?: {}, subroute?: string | undefined) {
  const nested = subroute ? { screen: subroute } : {};
  navigationRef.current?.navigate(name, { ...nested, params });
}

export function resetFromRoot(route: string, params?: {}, subroute?: string | undefined) {
  const state = subroute
    ? {
        state: {
          routes: [
            {
              name: subroute,
            },
          ],
        },
      }
    : {};

  navigationRef.current?.dispatch({
    ...CommonActions.reset({
      index: 0,
      routes: [
        {
          name: route,
          params,
          ...state,
        },
      ],
    }),
  });
}
