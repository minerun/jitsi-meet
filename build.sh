#! /bin/bash

NEW_JITSI_MEET_VER=$1
NEW_COMP_VERSION=$2
NEW_VERSION=$3

echo $NEW_VERSION > $NEW_COMP_VERSION

JITSI_MEET_WEB_VER=`cat jitsi-meet-web`

export JITSI_MEET_META_VERSION="2.0.${NEW_JITSI_MEET_VER}"
export DEBFULLNAME="Jitsi Team"
export DEBEMAIL="dev@jitsi.org"
dch -v "${JITSI_MEET_META_VERSION}-1" "Build using jitsi-meet-web: $JITSI_MEET_WEB_VER"
dch -D unstable -r ""

dpkg-buildpackage -A -rfakeroot -us -uc

debian/rules clean
git checkout debian/changelog
