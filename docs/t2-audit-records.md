# Audit records

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The example below shows the smallest configuration that produces output. Use the verbose flag when you need to see why a step was skipped. A settings change does not effect the job that is already running.

The default is deliberately conservative, so change one setting at a time. It is written for operators who already have the command installed. The second run is faster then the first because the cache is warm.

## Before you start

This page is part of the harnessctl documentation set. Every section is optional, and an empty section equals an absent one. The daemon writes it's own log next to the state directory.

Some background may help here. A restart is imminent when the lock is older than the process.

The output is designed to be readable first and parsable second. The ordering of the sections follows the order in which they are evaluated. Operators keep there own configuration outside the repository.

## Details

A warning does not stop the run, but it usually points at a real problem. Two copies of the command contend for the same lock file. A stale lock can loose work that was already queued.

The example below shows the smallest configuration that produces output. Every section is optional, and an empty section equals an absent one. The report states weather the run succeeded.

Some background may help here. The panel logs errors in a discreet way, without extra detail.

## Common settings

It is written for operators who already have the command installed. The tool never writes outside the directory named on the command line. Run the check first to insure that the directory exists.

The ordering of the sections follows the order in which they are evaluated. Use the verbose flag when you need to see why a step was skipped. The sizing page gives advise about memory and disk.

