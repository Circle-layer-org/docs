---
id: high-tps
title: Performance Architecture
sidebar_label: Performance Architecture
---

import '@site/src/css/comparison.css';

# Performance Architecture

Learn about Circle Layer's current performance capabilities and the architecture that enables fast, reliable transaction processing.

## Current Testnet Performance

### Target Network Metrics
- **Block Time**: 3 seconds (actual performance)
- **Transaction Finality**: 1-3 seconds (actual performance)
- **Network Uptime**: 99.95% (Last 30 days)
- **Consensus**: Delegated Proof of Stake (DPoS)

### Network Configuration
- **Chain ID**: 28525
- **Gas Price**: Minimum 0.000021 CLAYER
- **Block Gas Limit**: 10,000,000,000,000 per block
- **Energy Efficiency**: 99.9% less than Proof of Work

## Technical Implementation

### DPoS Consensus Architecture
- **Validator Network**: Minimum 5 active validators required
- **Staking Requirements**: 100,000 CLAYER minimum
- **Block Production**: Consistent 3-second intervals
- **Finality**: Fast confirmation through DPoS mechanism

### Network Infrastructure
- **RPC Endpoint**: https://testnet-rpc.circlelayer.com
- **WebSocket**: wss://testnet-rpc.circlelayer.com
- **Multiple Ports**: 32668, 32669, 8545, 6060, 80, 22
- **Geographic Distribution**: Support for multiple RPC endpoints

### Performance Optimizations
- **Efficient Block Propagation**: 3-second consistent timing
- **Resource Optimization**: Modest hardware requirements
- **Network Topology**: Optimized for low latency
- **Gas Efficiency**: Predictable CLAYER-based fees

## Current Use Cases

### Development & Testing
- **Smart Contract Testing**: Fast iteration with 3-second blocks
- **dApp Development**: Quick feedback loops
- **Integration Testing**: Real-time transaction confirmation
- **Gas Optimization**: Cost-effective testing environment

### Target Applications
- **DeFi Protocols**: Fast transaction settlement
- **Token Development**: Quick deployment and testing
- **Wallet Integration**: Seamless user experience
- **Cross-chain Testing**: Bridge and oracle preparation

## Performance Comparison

### Block Time Comparison
| Network | Block Time | Finality |
|---------|------------|----------|
| Circle Layer Testnet | 3s | 1-3s |
| Ethereum | 12s | 6-10min |
| Polygon | 2s | 2-3s |
| BSC | 3s | 3s |

<div className="mobile-table-cards">
  <div className="section-header-card">
    <h4>Block Time Comparison</h4>
  </div>
  
  <div className="comparison-card circle-layer">
    <div className="card-header">
      <div className="card-title">Circle Layer Testnet</div>
      <div className="network-badge">Our Network</div>
    </div>
    <div className="card-content">
      <div className="feature-row">
        <div className="feature-label">Block Time</div>
        <div className="feature-value highlight">3s</div>
      </div>
      <div className="feature-row">
        <div className="feature-label">Finality</div>
        <div className="feature-value highlight">1-3s</div>
      </div>
    </div>
  </div>
  
  <div className="comparison-card">
    <div className="card-header">
      <div className="card-title">Ethereum</div>
      <div className="network-badge">Mainnet</div>
    </div>
    <div className="card-content">
      <div className="feature-row">
        <div className="feature-label">Block Time</div>
        <div className="feature-value">12s</div>
      </div>
      <div className="feature-row">
        <div className="feature-label">Finality</div>
        <div className="feature-value">6-10min</div>
      </div>
    </div>
  </div>
  
  <div className="comparison-card">
    <div className="card-header">
      <div className="card-title">Polygon</div>
      <div className="network-badge">Mainnet</div>
    </div>
    <div className="card-content">
      <div className="feature-row">
        <div className="feature-label">Block Time</div>
        <div className="feature-value">2s</div>
      </div>
      <div className="feature-row">
        <div className="feature-label">Finality</div>
        <div className="feature-value">2-3s</div>
      </div>
    </div>
  </div>
  
  <div className="comparison-card">
    <div className="card-header">
      <div className="card-title">BSC</div>
      <div className="network-badge">Mainnet</div>
    </div>
    <div className="card-content">
      <div className="feature-row">
        <div className="feature-label">Block Time</div>
        <div className="feature-value">3s</div>
      </div>
      <div className="feature-row">
        <div className="feature-label">Finality</div>
        <div className="feature-value">3s</div>
      </div>
    </div>
  </div>
</div>

### Network Reliability
- **Consistent Performance**: 99.95% uptime
- **Predictable Gas Costs**: Stable CLAYER pricing
- **Fast Confirmation**: 1-3 second finality
- **Validator Network**: Distributed consensus

## 🚧 Future Performance Enhancements

### In Development
- **Enhanced Consensus**: Advanced DPoS optimizations
- **Monitoring Systems**: Real-time performance tracking
- **Network Analytics**: Comprehensive performance metrics
- **Scaling Solutions**: Preparation for higher throughput

### Planned Improvements
- **TPS Optimization**: Enhanced transaction processing
- **Latency Reduction**: Further consensus improvements
- **Capacity Scaling**: Infrastructure expansion
- **Cross-chain Performance**: Bridge optimization

## Real-World Applications

### Testnet Use Cases
- **Development Testing**: 99.95% reliable environment
- **Performance Benchmarking**: Consistent 3-second blocks
- **Integration Validation**: Fast confirmation times
- **User Experience Testing**: Real-time responsiveness

### Production Readiness
- **Proven Stability**: Months of consistent operation
- **Scalable Architecture**: Validator network growth
- **Performance Monitoring**: Continuous optimization
- **Community Testing**: Real-world validation

## Developer Benefits

### Fast Development Cycle
- **Quick Deployment**: 3-second confirmation
- **Rapid Testing**: Fast iteration cycles
- **Real-time Feedback**: Immediate transaction results
- **Cost-effective**: Affordable CLAYER gas fees

### Integration Advantages
- **Standard EVM**: Familiar performance patterns
- **Predictable Timing**: Consistent block intervals
- **Reliable Network**: High uptime guarantees
- **Multiple Endpoints**: Redundant connectivity

For detailed integration guides, see:
- [Network Configuration](/getting-started/connect-testnet)
- [Performance Monitoring](/nodes-validation/node-monitoring)
- [Development Setup](/development/deploying-contracts)