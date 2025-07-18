---
sidebar_position: 4
description: Essential CLAYER Trading Guide - purchase limits and timing to prevent transaction failures during Circle Layer token launch.
---

import '../../src/css/launch-guide.css';

# CLAYER Trading Guide

## ⚡ Quick Reference

**IMPORTANT**: Follow these limits to prevent transaction failures during launch.

<table className="launch-guide-table">
  <thead>
    <tr>
      <th>Time Period</th>
      <th>Max Transaction per Wallet</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>0-1 minute</strong></td>
      <td><strong>1,000,000 CLAYER</strong></td>
    </tr>
    <tr>
      <td><strong>2-5 minutes</strong></td>
      <td><strong>1,500,000 CLAYER</strong></td>
    </tr>
    <tr>
      <td><strong>6-8 minutes</strong></td>
      <td><strong>2,000,000 CLAYER</strong></td>
    </tr>
    <tr>
      <td><strong>9-15 minutes</strong></td>
      <td><strong>3,000,000 CLAYER</strong></td>
    </tr>
    <tr>
      <td><strong>16-60 minutes</strong></td>
      <td><strong>5,000,000 CLAYER</strong></td>
    </tr>
    <tr>
      <td><strong>After 1 hour</strong></td>
      <td><strong>No limits</strong></td>
    </tr>
  </tbody>
</table>

## 🛡️ Anti-Sniper Protection

Circle Layer implements **automatic purchase limits** during launch to ensure fair distribution and prevent bot sniping.

### Why These Limits Exist
- **Prevent transaction failures** - Buying more than allowed will cause your transaction to fail
- **Fair distribution** - Everyone gets equal opportunity to participate  
- **Anti-bot protection** - Prevents automated sniping attacks
- **Network stability** - Manages initial trading volume

## 📋 Buying Strategy

### ✅ **Recommended Approach**
1. **Check the time** since launch started
2. **Buy within limits** for your time window
3. **Wait for next phase** if you want to buy more
4. **Monitor gas fees** - higher during peak times

### ❌ **Common Mistakes**
- Trying to buy maximum amount in first minute
- Not checking current time phase before buying
- Attempting multiple large purchases quickly
- Ignoring wallet limit warnings

## 🔢 Exact Purchase Limits

**Total Supply**: 1,000,000,000 CLAYER

- **First minute**: Max 0.10% = **1,000,000 tokens**
- **2-5 minutes**: Max 0.15% = **1,500,000 tokens**  
- **6-8 minutes**: Max 0.20% = **2,000,000 tokens**
- **9-15 minutes**: Max 0.30% = **3,000,000 tokens**
- **16-60 minutes**: Max 0.50% = **5,000,000 tokens**
- **After 1 hour**: **No wallet limits**

## ⚠️ Transaction Failure Prevention

### Why Transactions Fail
- **Exceeding wallet limit** for current time period
- **Network congestion** during high activity
- **Insufficient gas** for transaction processing
- **Slippage tolerance** set too low

### How to Avoid Failures
1. **Stay within limits** - Check your current phase
2. **Use adequate gas** - Don't use "slow" gas settings

## 🎯 Pro Tips

### Best Practice
- **Start small** in early phases
- **Scale up** as limits increase
- **Monitor the clock** - know exactly when phases change
- **Have backup plan** - be ready for network congestion


## 🔗 Contract Address

**Circle Layer (CLAYER)**: `0x7b5d6a651b5ea2049489123c5959b3d3cdfeee57`

### Verification
- Always verify the contract address
- Only buy from official DEX pairs
- Double-check you're on the right network

## 📞 Support

If your transaction fails:
1. **Check wallet limits** - likely cause of failure
2. **Wait for next phase** - limits increase over time  
3. **Try smaller amount** - stay well within limits
4. **Join [Telegram](https://t.me/circlelayer)** for live support

---

**Remember**: These limits are **hardcoded** in the smart contract and **cannot be bypassed**. Following this guide ensures successful transactions without transaction failures. 