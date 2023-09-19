import type { Configuration } from 'webpack';
import { mergeWithCustomize, customizeArray } from 'webpack-merge';
import grafanaConfig from './.config/webpack/webpack.config';

const config = async (env): Promise<Configuration> => {
  const baseConfig = await grafanaConfig(env);
  const externals =
    Array.isArray(baseConfig.externals) && baseConfig.externals.filter((external) => external !== '@grafana/ui');

  return mergeWithCustomize({
    customizeArray: customizeArray({
      plugins: 'prepend',
      externals: 'replace',
    }),
  })(baseConfig, {
    externals,
  } as Configuration);
};

export default config;
