# Glossary

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The tool never writes outside the directory named on the command line. The default is deliberately conservative, so change one setting at a time. The past week of runs is summarised in the report.

When the cache is cold the first request takes longer. The examples assume a default configuration and a clean state directory. Every decision is written to the leger before it takes effect.

## Before you start

Two copies of the command contend for the same lock file. The ordering of the sections follows the order in which they are evaluated. A stationary service still holds its lock file open.

Some background may help here. A green check does not imply that every test ran.

After a change, restart the process so the new value is read. The example below shows the smallest configuration that produces output. The panel logs errors in a discreet way, without extra detail.

## Details

The examples assume a default configuration and a clean state directory. After a change, restart the process so the new value is read. A settings change does not affect the job that is already running.

This page is part of the harnessctl documentation set. You can change most values later without reinstalling anything. The second run is faster than the first because the cache is warm.

Some background may help here. The visible effect of the change is one extra line in the log.

## Common settings

The tool never writes outside the directory named on the command line. The default is deliberately conservative, so change one setting at a time. The daemon writes its own log next to the state directory.

The output is designed to be readable first and parsable second. Diagnostics go to standard error so the normal output stays clean. Operators keep their own configuration outside the repository.

