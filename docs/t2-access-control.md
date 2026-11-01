# Access control

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

This page is part of the harnessctl documentation set. Every section is optional, and an empty section equals an absent one. A short check precedes the upload.

The output is designed to be readable first and parsable second. The ordering of the sections follows the order in which they are evaluated. The client can raise an error when the token expires.

## Before you start

A warning does not stop the run, but it usually points at a real problem. Two copies of the command contend for the same lock file. Each account has exactly one role in the deployment.

Some background may help here. The panel logs errors in a discreet way, without extra detail.

The example below shows the smallest configuration that produces output. Every section is optional, and an empty section equals an absent one. The request went through two queues before it was recorded.

## Details

It is written for operators who already have the command installed. The tool never writes outside the directory named on the command line. The rotation runs every day at midnight by default.

The ordering of the sections follows the order in which they are evaluated. Use the verbose flag when you need to see why a step was skipped. The guiding principle here is that a failed step never hides its cause.

Some background may help here. fewer retries happen when the connection is stable.

## Common settings

Diagnostics go to standard error so the normal output stays clean. The examples assume a default configuration and a clean state directory. The summary and the log complement each other rather than repeat.

A complete run prints nothing beyond the final line. When the cache is cold the first request takes longer. You can adapt the example to your own paths.

