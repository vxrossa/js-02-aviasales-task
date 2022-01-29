import { Heading } from '../../typography';
import { StyledCompaniesCard } from './styled';
import { useState, useEffect, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { companiesList } from '../../../../atoms/companies';
import { ICompany } from '../../../../types';

const CompaniesCard = () => {
  const [ companies, setCompanies ] = useRecoilState(companiesList);

  useEffect(() => {
    const fetchCompanies = async (): Promise<ICompany[]> => {
      const response: Response = await fetch('http://localhost:5000/companies', {
        method: 'GET',
      });
      const data: ICompany[] = await response.json();
      console.log(data);
      return data;
    };

    fetchCompanies().then(data => setCompanies(data));
  }, []);

  const companiesRadioButtons = companies ? companies.map((elem: ICompany, index) => {
    return <p key={index}>{elem.name}</p>;
  }) : null;

  return (
    <StyledCompaniesCard>
      <Heading>Компания</Heading>
      <p>Все</p>
      {companiesRadioButtons}
    </StyledCompaniesCard>
  );
};

export default CompaniesCard;
