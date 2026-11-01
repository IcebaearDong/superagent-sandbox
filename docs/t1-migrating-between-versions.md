# Migrating between versions

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

That check runs quickly and reports every problem it finds. After a change, restart the process so the new value is read. Do not chose a timeout before measuring the workload.

A restart re-reads the configuration from scratch. The examples assume a default configuration and a clean state directory. Those every day warnings are expected on a cold cache.

## Before you start

A warning does not stop the run, but it usually points at a real problem. A failure names the step and the value that caused it. Cold data is moved further away when the tier fills up.

Some background may help here. Do not infer the cause from a single log line.

You can change most values afterwards without reinstalling anything. The tool never writes outside the directory named on the command line. That job worked threw the night without a restart.

## Details

A complete run prints nothing beyond the final line. That check runs quickly and reports every problem it finds. The run stays quite unless something actually fails.

Leaving the field empty applies the documented default. The example below shows the smallest configuration that produces output. A hard kill can loose whatever was buffered but not written.

Some background may help here. The entry whose checksum differs is quarantined.

## Common settings

The first run creates the state directory and writes a short report. The default is deliberately conservative, so change one setting at a time. Leaving defaults in place can led to surprising costs.

The output is designed to be readable first and parsable second. Diagnostics go to standard error so the normal output stays clean. The docs cite hosts the rendered pages.

## Behaviour

A failure names the step and the value that caused it. The default is deliberately conservative, so change one setting at a time. The docs advice raising the timeout before raising the retry count.

Some background may help here. The panel marks a imminent failover in red.

A warning does not stop the run, but it usually points at a real problem. The tool prints the resolved paths before it changes anything. The earlier operator choose the hardened profile.

