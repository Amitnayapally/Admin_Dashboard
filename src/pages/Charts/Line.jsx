import React from 'react';
import {ChartHeader,LineChart} from '../../components';

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartHeader category="Chart" title="Line" description="Inflation Rate"/>
      <div className="w-full">
        <LineChart/>
      </div>
      <div className="mt-4 dark:text-white">
      <p align="center"><br /><br /><br /><br /><br /><br /><br /><br /><b>© 2024 React-Admin-Dashboard. All Rights Reserved | Design By Amit Roy.</b></p>
      </div>
    </div>
  )
}

export default Line