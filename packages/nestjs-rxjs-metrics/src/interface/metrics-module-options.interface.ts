import type { MetricConfig } from '../type/metrics-config.type';
import type { PrometheusOptions } from '@willsoto/nestjs-prometheus';

export interface MetricsModuleOptionsInterface<
    C extends MetricConfig,
    G extends MetricConfig,
    H extends MetricConfig,
    S extends MetricConfig
> extends PrometheusOptions {
    counterMetrics: C;
    gaugeMetrics: G;
    histogramMetrics: H;
    summaryMetrics: S;
}
