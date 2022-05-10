from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in darcos_th/__init__.py
from darcos_th import __version__ as version

setup(
	name="darcos_th",
	version=version,
	description="Theme with Darcos colors",
	author="Darcos",
	author_email="contact@darcos.dz",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
