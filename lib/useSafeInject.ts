const useSafeInject = <T>(key: string): T => {
  const value = inject(key);

  if (!value) {
    throw new Error(`useSafeInject: ${key} is not provided`);
  }

  return value as T;
};

export default useSafeInject;
