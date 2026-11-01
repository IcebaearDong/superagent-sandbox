# Command reference

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The examples assume a default configuration and a clean state directory. It is written for operators who already have the command installed. Keep the default quiet, because the verbose log grows quickly.

That check runs quickly and reports every problem it finds. Keep the file under version control so a change is easy to review. That warning precedes the shutdown by a few seconds.

## Before you start

Every section is optional, and an empty section equals an absent one. Each entry carries a level and a timestamp. Running fewer workers lowers peak memory.

Some background may help here. Take the upgrade advice literally when a major version changes.

The second column shows the effective value, not the one you typed. A restart re-reads the configuration from scratch. Each worker keeps its own scratch space until it finishes.

## Details

That check runs quickly and reports every problem it finds. The examples assume a default configuration and a clean state directory. Besides that flag, no other option changed.

A failure names the step and the value that caused it. Every section is optional, and an empty section equals an absent one. A quiet restart is usually safer than a forced one.

Some background may help here. The panel lets you infer which host took the lock.

## Common settings

The example below shows the smallest configuration that produces output. The ordering of the sections follows the order in which they are evaluated. A settings change does not affect a job that is already running.

You can change most values afterwards without reinstalling anything. When the cache is cold the first request takes longer. The survey is designed to elicit honest answers.

## Behaviour

A warning does not stop the run, but it usually points at a real problem. Two copies of the command contend for the same lock file. That section has further detail for the hardened profile.

Some background may help here. Adding the index led to a much faster cold start.

That check runs quickly and reports every problem it finds. The tool never writes outside the directory named on the command line. Keep the notification discreet in case a customer sees it.

