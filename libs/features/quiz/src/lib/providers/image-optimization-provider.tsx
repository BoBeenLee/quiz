import React from 'react';

interface ImageOptions {
  unoptimized: boolean;
}

interface ProviderProps extends ImageOptions {
  children: React.ReactNode;
}

export const ImageOptimizationContext = React.createContext<ImageOptions>({
  unoptimized: false,
});

export const ImageOptimizationProvider = ({
  children,
  unoptimized,
}: ProviderProps) => {
  return (
    <ImageOptimizationContext.Provider value={{ unoptimized }}>
      {children}
    </ImageOptimizationContext.Provider>
  );
};
