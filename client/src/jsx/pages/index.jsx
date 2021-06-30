import React, { } from 'react';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';

import BtcChart from '../charts/btc';
import LtcChart from '../charts/ltc';
import XrpChart from '../charts/xrp';
import AreaChart from '../charts/area';
import RadialChart from '../charts/radial';



function Dashboard() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="row">
                                <div class="col-xl-3 col-lg-6 col-md-6">
                                    <div class="widget-card">
                                        <div class="widget-title">
                                            <h5>Balance</h5>
                                            <p class="text-success">133% <span><i class="las la-arrow-up"></i></span></p>
                                        </div>
                                        <div class="widget-info">
                                            <h3>$18,235.0</h3>
                                            <p>USD</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-md-6">
                                    <div class="widget-card">
                                        <div class="widget-title">
                                            <h5>Balance</h5>
                                            <p class="text-danger">133% <span><i class="las la-arrow-down"></i></span></p>
                                        </div>
                                        <div class="widget-info">
                                            <h3>$18,235.0</h3>
                                            <p>USD</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-md-6">
                                    <div class="widget-card">
                                        <div class="widget-title">
                                            <h5>Balance</h5>
                                            <p class="text-success">133% <span><i class="las la-arrow-up"></i></span></p>
                                        </div>
                                        <div class="widget-info">
                                            <h3>$18,235.0</h3>
                                            <p>USD</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-md-6">
                                    <div class="widget-card">
                                        <div class="widget-title">
                                            <h5>Balance</h5>
                                            <p class="text-danger">133% <span><i class="las la-arrow-down"></i></span></p>
                                        </div>
                                        <div class="widget-info">
                                            <h3>$18,235.0</h3>
                                            <p>USD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-xl-8 col-lg-12 col-xxl-8">
                                    <div class="card profile_chart transparent">
                                        <div class="card-header">
                                            <div class="chart_current_data">
                                                <h3>254856 <span>USD</span></h3>
                                                <p class="text-success">125648 <span>USD (20%)</span></p>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <AreaChart />
                                            <div class="chart-content text-center">
                                                <div class="row">
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">24hr Volume</p>
                                                            <strong>$1236548.325</strong>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">Market Cap</p>
                                                            <strong>19B USD</strong>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">Circulating</p>
                                                            <strong>29.4M BTC</strong>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">All Time High</p>
                                                            <strong>19.783.06 USD</strong>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">Typical hold </p>
                                                            <strong>88 days</strong>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">Trading activity </p>
                                                            <strong>70% buy </strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-4 col-lg-12 col-xxl-4">
                                    <div class="card balance-widget transparent">
                                        <div class="card-body">
                                            <RadialChart/>
                                            <div class="balance-widget">
                                                <h4 className="mt-1 mb-4">Total Balance : <strong>$125480</strong></h4>
                                                <ul class="list-unstyled">
                                                    <li class="media">
                                                        <i class="cc BTC mr-3"></i>
                                                        <div class="media-body">
                                                            <h5 class="m-0">Bitcoin</h5>
                                                        </div>
                                                        <div class="text-right">
                                                            <h5>0.000242 BTC</h5>
                                                            <span>0.125 USD</span>
                                                        </div>
                                                    </li>
                                                    <li class="media">
                                                        <i class="cc LTC mr-3"></i>
                                                        <div class="media-body">
                                                            <h5 class="m-0">Litecoin</h5>
                                                        </div>
                                                        <div class="text-right">
                                                            <h5>0.000242 LTC</h5>
                                                            <span>0.125 USD</span>
                                                        </div>
                                                    </li>
                                                    <li class="media">
                                                        <i class="cc XRP mr-3"></i>
                                                        <div class="media-body">
                                                            <h5 class="m-0">Ripple</h5>
                                                        </div>
                                                        <div class="text-right">
                                                            <h5>0.000242 XRP</h5>
                                                            <span>0.125 USD</span>
                                                        </div>
                                                    </li>
                                                    <li class="media">
                                                        <i class="cc DASH mr-3"></i>
                                                        <div class="media-body">
                                                            <h5 class="m-0">Dash</h5>
                                                        </div>
                                                        <div class="text-right">
                                                            <h5>0.000242 XRP</h5>
                                                            <span>0.125 USD</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-xxl-12">
                                    <div class="row">
                                        <div class="col-xl-4">
                                            <div class="widget-card">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="widget-stat">
                                                        <div class="coin-title">
                                                            <span><i class="cc BTC-alt"></i></span>
                                                            <h5 class="d-inline-block ml-2 mb-3">Bitcoin
                                                            <span>(24h)</span>
                                                            </h5>
                                                        </div>
                                                        <h4>USD 1254.36 <span class="badge badge-success ml-2">+
                                                            06%</span>
                                                        </h4>
                                                    </div>
                                                    <BtcChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4">
                                            <div class="widget-card">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="widget-stat">
                                                        <div class="coin-title">
                                                            <span><i class="cc ETH-alt"></i></span>
                                                            <h5 class="d-inline-block ml-2 mb-3">Ethereum
                                                            <span>(24h)</span>
                                                            </h5>
                                                        </div>
                                                        <h4>USD 1254.36 <span class="badge badge-danger ml-2">-
                                                            06%</span>
                                                        </h4>
                                                    </div>
                                                    <LtcChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4">
                                            <div class="widget-card">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="widget-stat">
                                                        <div class="coin-title">
                                                            <span><i class="cc LTC-alt"></i></span>
                                                            <h5 class="d-inline-block ml-2 mb-3">Litecoin
                                                            <span>(24h)</span>
                                                            </h5>
                                                        </div>
                                                        <h4>USD 1254.36 <span class="badge badge-primary ml-2">
                                                            06%</span>
                                                        </h4>
                                                    </div>
                                                    <XrpChart />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="row">
                                <div class="col-xl-6 col-lg-12 col-xxl-4">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">Exchange</h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="buy-sell-widget">
                                                <form name="myform" class="currency_validate">
                                                    <div class="form-group">
                                                        <label class="mr-sm-2">Currency</label>
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text"><i
                                                                    class="cc BTC-alt"></i></label>
                                                            </div>
                                                            <select name='currency' class="form-control">
                                                                <option value="">Select</option>
                                                                <option value="bitcoin">Bitcoin</option>
                                                                <option value="litecoin">Litecoin</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="mr-sm-2">Payment Method</label>
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text"><i
                                                                    class="fa fa-bank"></i></label>
                                                            </div>
                                                            <select class="form-control" name="method">
                                                                <option value="">Select</option>
                                                                <option value="bank">Bank of America ********45845</option>
                                                                <option value="master">Master Card ***********5458</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="mr-sm-2">Enter your amount</label>
                                                        <div class="input-group">
                                                            <input type="text" name="currency_amount" class="form-control"
                                                                placeholder="0.0214 BTC" />
                                                            <input type="text" name="usd_amount" class="form-control"
                                                                placeholder="125.00 USD" />
                                                        </div>
                                                        <div class="d-flex justify-content-between mt-3">
                                                            <p class="mb-0">Monthly Limit</p>
                                                            <h6 class="mb-0">$49750 remaining</h6>
                                                        </div>
                                                    </div>
                                                    <button type="submit" name="submit"
                                                        class="btn btn-success btn-block">Exchange
                                                    Now</button>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-12 col-xxl-8">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">Transaction </h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="transaction-widget">
                                                <ul class="list-unstyled">
                                                    <li class="media">
                                                        <span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                                        <div class="media-body">
                                                            <p>
                                                                <small>9 November, 2020</small>
                                                                <small>15:33</small>
                                                            </p>
                                                            <p class="wallet-address text-dark">15f5s8s47bhj61r8w4e77e5e56
                                                        </p>
                                                        </div>
                                                        <div class="text-right">
                                                            <h4>0.000242 BTC</h4>
                                                        </div>
                                                    </li>
                                                    <li class="media">
                                                        <span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                                        <div class="media-body">
                                                            <p>
                                                                <small>9 November, 2020</small>
                                                                <small>15:33</small>
                                                            </p>
                                                            <p class="wallet-address text-dark">15f5s8s47bhj61r8w4e77e5e56
                                                        </p>
                                                        </div>
                                                        <div class="text-right">
                                                            <h4>0.000242 LTC</h4>
                                                        </div>
                                                    </li>
                                                    <li class="media">
                                                        <span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                                        <div class="media-body">
                                                            <p>
                                                                <small>9 November, 2020</small>
                                                                <small>15:33</small>
                                                            </p>
                                                            <p class="wallet-address text-dark">15f5s8s47bhj61r8w4e77e5e56
                                                        </p>
                                                        </div>
                                                        <div class="text-right">
                                                            <h4>0.000242 XRP</h4>
                                                        </div>
                                                    </li>
                                                    <li class="media">
                                                        <span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                                        <div class="media-body">
                                                            <p>
                                                                <small>9 November, 2020</small>
                                                                <small>15:33</small>
                                                            </p>
                                                            <p class="wallet-address text-dark">15f5s8s47bhj61r8w4e77e5e56
                                                        </p>
                                                        </div>
                                                        <div class="text-right">
                                                            <h4>0.000242 XRP</h4>
                                                        </div>
                                                    </li>
                                                    <li class="media">
                                                        <span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                                        <div class="media-body">
                                                            <p>
                                                                <small>9 November, 2020</small>
                                                                <small>15:33</small>
                                                            </p>
                                                            <p class="wallet-address text-dark">15f5s8s47bhj61r8w4e77e5e56
                                                        </p>
                                                        </div>
                                                        <div class="text-right">
                                                            <h4>0.000242 XRP</h4>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            
        </>
    )
}

export default Dashboard;