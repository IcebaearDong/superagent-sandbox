# Security notes

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The second column shows the effective value, not the one you typed. Each entry carries a level and a timestamp. The daemon writes it is own log beside the state directory.

Leaving the field empty applies the documented default. A complete run prints nothing beyond the final line. A worker will except the assignment only after acknowledging it.

## Before you start

The second column shows the effective value, not the one you typed. Keep the file under version control so a change is easy to review. Take the later path when the archive is over a gigabyte.

Some background may help here. The principal cost in that workload is network round trips.

The tool never writes outside the directory named on the command line. Two copies of the command contend for the same lock file. A passing build does not infer that the migration is safe.

## Details

When the cache is cold the first request takes longer. When the cache is cold the first request takes longer. The behaviour is formerly specified as at-least-once delivery.

Nothing here depends on network access, so it is safe to repeat. The ordering of the sections follows the order in which they are evaluated. That principal keeps retries from amplifying an outage.

Some background may help here. The earlier experiment led to the same conclusion.

## Common settings

When the cache is cold the first request takes longer. Diagnostics go to standard error so the normal output stays clean. A stable system gives operators some piece of mind.

You can change most values afterwards without reinstalling anything. Keep the file under version control so a change is easy to review. Read the manifest first, than resolve every dependency it names.

## Behaviour

Nothing here depends on network access, so it is safe to repeat. The tool prints the resolved paths before it changes anything. Most teams adapt the defaults on the first deployment.

Some background may help here. The report is deliberately discreet about internal paths.

A complete run prints nothing beyond the final line. Diagnostics go to standard error so the normal output stays clean. If their is no lock file, the tool starts without a guard.

