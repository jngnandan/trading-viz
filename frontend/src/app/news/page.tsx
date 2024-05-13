'use client'
import React from 'react'

import Header from '../header'

import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

const newsRows = [
  {
    title: "Kenvue's stock falls after company announces $2.3 million secondary stock offering",
    time: "08:09AM",
    source: "W"
  },
  {
    title: "RBC Reorganizes Investment Banking in a Play for More Deals",
    time: "08:08AM",
    source: "WSJ"
  },
  {
    title: "Tesla's CEO Elon Musk Tweets About Company's New Solar Technology",
    time: "08:15AM",
    source: "CNBC"
  },
  {
    title: "Amazon's Quarterly Earnings Beat Expectations, Stock Surges",
    time: "08:20AM",
    source: "Bloomberg"
  },
  {
    title: "Government Announces New Tax Incentives for Renewable Energy Companies",
    time: "08:25AM",
    source: "Reuters"
  },
  {
    title: "GameStop's 'Roaring Kitty' Returns, Sends Shares Skyrocketing As 'Million Apes Go Insomniac'",
    time: "08:20AM",
    source: "💬"
  },
  {
    title: "Futures Gain With All Time Highs In Sight As Key CPI Report Looms",
    time: "08:03AM",
    source: "💬"
  },
  // Add more news rows as needed
];


const blogRows = [
  {
    title: "GameStop's 'Roaring Kitty' Returns, Sends Shares Skyrocketing As 'Million Apes Go Insomniac'",
    time: "08:20AM",
    source: "💬"
  },
  {
    title: "Futures Gain With All Time Highs In Sight As Key CPI Report Looms",
    time: "08:03AM",
    source: "💬"
  },
  {
    title: "Kenvue's stock falls after company announces $2.3 million secondary stock offering",
    time: "08:09AM",
    source: "W"
  },
  {
    title: "RBC Reorganizes Investment Banking in a Play for More Deals",
    time: "08:08AM",
    source: "WSJ"
  },
  {
    title: "Tesla's CEO Elon Musk Tweets About Company's New Solar Technology",
    time: "08:15AM",
    source: "CNBC"
  },
  {
    title: "Amazon's Quarterly Earnings Beat Expectations, Stock Surges",
    time: "08:20AM",
    source: "Bloomberg"
  },
  {
    title: "Government Announces New Tax Incentives for Renewable Energy Companies",
    time: "08:25AM",
    source: "Reuters"
  },
  {
    title: "GameStop's 'Roaring Kitty' Returns, Sends Shares Skyrocketing As 'Million Apes Go Insomniac'",
    time: "08:20AM",
    source: "💬"
  },
  {
    title: "Futures Gain With All Time Highs In Sight As Key CPI Report Looms",
    time: "08:03AM",
    source: "💬"
  },
  // Add more blog rows as needed
];

function News() {
  return (
    <div>
      <Header />
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='mx-8'>
          <Typography level="body-lg" textAlign="start" sx={{ my: 2 }}>
            News
          </Typography>
          <Sheet
            sx={{
              '--TableCell-height': '40px',
              '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
              height: 1000,
              overflow: 'auto',
              background: (theme) => `linear-gradient(${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
                linear-gradient(rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
                radial-gradient(
                  farthest-side at 50% 0,
                  rgba(0, 0, 0, 0.12),
                  rgba(0, 0, 0, 0)
                ),
                radial-gradient(
                    farthest-side at 50% 100%,
                    rgba(0, 0, 0, 0.12),
                    rgba(0, 0, 0, 0)
                  )
                  0 100%`,
              backgroundSize: '100% 40px, 100% 40px, 100% 14px, 100% 14px',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'local, local, scroll, scroll',
              backgroundPosition: '0 var(--TableHeader-height), 0 100%, 0 var(--TableHeader-height), 0 100%',
              backgroundColor: 'background.surface',
            }}
          >
            <Table stickyHeader>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Time</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {newsRows.map((row, index) => (
                  <tr key={index}>
                    <td>{row.title}</td>
                    <td>{row.time}</td>
                    <td>{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Sheet>
        </div>
        <div className='mx-8'>
          <Typography level="body-lg" textAlign="start" sx={{ my: 2 }}>
            Blogs
          </Typography>
          <Sheet
            sx={{
              '--TableCell-height': '40px',
              '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
              height: 1000,
              overflow: 'auto',
              background: (theme) => `linear-gradient(${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
                linear-gradient(rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
                radial-gradient(
                  farthest-side at 50% 0,
                  rgba(0, 0, 0, 0.12),
                  rgba(0, 0, 0, 0)
                ),
                radial-gradient(
                    farthest-side at 50% 100%,
                    rgba(0, 0, 0, 0.12),
                    rgba(0, 0, 0, 0)
                  )
                  0 100%`,
              backgroundSize: '100% 40px, 100% 40px, 100% 14px, 100% 14px',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'local, local, scroll, scroll',
              backgroundPosition: '0 var(--TableHeader-height), 0 100%, 0 var(--TableHeader-height), 0 100%',
              backgroundColor: 'background.surface',
            }}
          >
            <Table stickyHeader>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Time</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {blogRows.map((row, index) => (
                  <tr key={index}>
                    <td>{row.title}</td>
                    <td>{row.time}</td>
                    <td>{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

export default News