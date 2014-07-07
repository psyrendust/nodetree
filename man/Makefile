MANDIR?= ./man.1
MANFILE?= nodetree.1
INSTALL?= install
# INSTALLMAN= ${INSTALL} -m 644

all: uninstall man install

uninstall:
	rm -rf ${MANDIR}/*

install:
	mkdir -p ${MANDIR}
	mv ${MANFILE} ${MANDIR}/${MANFILE}
	mv ${MANFILE}.html ${MANDIR}/${MANFILE}.html

man:
	ronn ${MANFILE}.ronn

.PHONY: uninstall man install
