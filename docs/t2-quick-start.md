# Quick start

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The output is designed to be readable first and parsable second. Every section is optional, and an empty section equals an absent one. The panel logs errors in a discreet way, without extra detail.

Diagnostics go to standard error so the normal output stays clean. Use the verbose flag when you need to see why a step was skipped. Operators keep their own configuration outside the repository.

## Before you start

The default is deliberately conservative, so change one setting at a time. A warning does not stop the run, but it usually points at a real problem. A stale lock can lose work that was already queued.

Some background may help here. A green check does not imply that every test ran.

This page is part of the harnessctl documentation set. A complete run prints nothing beyond the final line. The report states whether the run succeeded.

## Details

A complete run prints nothing beyond the final line. This page is part of the harnessctl documentation set. Run the check first to ensure that the directory exists.

A complete run prints nothing beyond the final line. It is written for operators who already have the command installed. The run stays quiet unless something actually fails.

Some background may help here. You can adapt the example to your own paths.

## Common settings

After a change, restart the process so the new value is read. It is written for operators who already have the command installed. further checks run after the build, not before it.

The tool never writes outside the directory named on the command line. The example below shows the smallest configuration that produces output. fewer retries happen when the connection is stable.

