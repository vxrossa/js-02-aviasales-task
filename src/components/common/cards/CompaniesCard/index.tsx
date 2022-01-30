import { Heading } from '../../typography';
import { StyledCompaniesCard } from './styled';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { companiesFilter, companiesList } from '../../../../atoms/companies';
import { ICompany } from '../../../../types';
import RadioCustom from '../../checkboxes/RadioCustom';
import { resetTicketsPage } from '../../../../atoms/tickets';

const CompaniesCard = () => {
  const [companies, setCompanies] = useRecoilState(companiesList);
  const setCompanyFilter = useSetRecoilState(companiesFilter);
  const resetPage = useSetRecoilState(resetTicketsPage);

  useEffect(() => {
    const fetchCompanies = async (): Promise<ICompany[]> => {
      const response: Response = await fetch('http://localhost:5000/companies');
      const data: ICompany[] = await response.json();
      return data;
    };

    fetchCompanies().then(data => {
      setCompanies(data);
    });
  }, []);

  const companiesRadioButtons = companies
    ? companies
        .map((elem: ICompany, index) => (
          <RadioCustom
            key={index}
            id={elem.id}
            checked={false}
            label={elem.name}
            onClick={() => {
              setCompanyFilter(elem.logo);
              resetPage(1);
            }}
          />
        ))
        .concat(
          <RadioCustom
            id={'all'}
            label="Все"
            checked={true}
            key={'allconnect'}
            onClick={() => {
              setCompanyFilter('');
              resetPage(1);
            }}
          />
        )
        .reverse()
    : null;

  return (
    <StyledCompaniesCard>
      <Heading>Компания</Heading>
      {companiesRadioButtons}
    </StyledCompaniesCard>
  );
};

export default CompaniesCard;
