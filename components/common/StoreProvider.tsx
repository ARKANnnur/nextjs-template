'use client';

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { makeStore, AppStore } from '@/lib/store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  const persistorRef = useRef<any>(null);

  if (!storeRef.current) {
    // Inisialisasi store instance pertama kali saat render
    const store = makeStore();
    storeRef.current = store;
    persistorRef.current = persistStore(store);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistorRef.current}>
        {children}
      </PersistGate>
    </Provider>
  );
}
